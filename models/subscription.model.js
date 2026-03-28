import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
      minLength: [2, "Subscription name must be at least 2 characters long"],
      maxLength: [50, "Subscription name must be less than 50 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Subscription price is required"],
      min: [0, "Subscription price must be a positive number"],
    },
    currency: {
      type: String,
      enum: ["USD", "IDR", "CAD"], // Add more currencies as needed
      default: "CAD",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
      default: "monthly",
    },
    category: {
      type: String,
      enum: ["entertainment", "utilities", "software", "other"], // Add more categories as needed
      default: "other",
      required: [true, "Subscription category is required"],
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment method is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "paused", "cancelled", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: [true, "Subscription start date is required"],
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: "Start date must be in the past",
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "Renewal date must be after the start date",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

subscriptionSchema.pre("save", async function () {
  const renewalPeriods = {
    daily: 1,
    weekly: 7, // Adjust this for weekly frequency
    monthly: 30, // Adjust this for monthly frequency
    yearly: 365, // Adjust this for yearly frequency
  };

  if (!this.startDate) {
    throw new Error("Subscription start date is required");
  }

  if (!this.renewalDate) {
    const period = renewalPeriods[this.frequency] || renewalPeriods.monthly;
    const computedRenewal = new Date(this.startDate);
    computedRenewal.setDate(computedRenewal.getDate() + period);
    this.renewalDate = computedRenewal;
  }

  if (this.renewalDate <= new Date()) {
    // Check if renewal date is in the past
    this.status = "expired";
  }
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
