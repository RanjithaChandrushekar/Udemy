// ================= BILLING DATA =================

const plans = {

    monthly: {

        basic: 499,

        standard: 799,

        premium: 1199

    },

    yearly: {

        basic: 4999,

        standard: 7999,

        premium: 11999

    }

};


// ================= CHANGE BILLING =================

function changeBilling(type) {

    const basicPrice =
        document.getElementById("basicPrice");

    const standardPrice =
        document.getElementById("standardPrice");

    const premiumPrice =
        document.getElementById("premiumPrice");


    const basicPeriod =
        document.getElementById("basicPeriod");

    const standardPeriod =
        document.getElementById("standardPeriod");

    const premiumPeriod =
        document.getElementById("premiumPeriod");


    const monthlyBtn =
        document.getElementById("monthlyBtn");

    const yearlyBtn =
        document.getElementById("yearlyBtn");


    if (type === "monthly") {

        basicPrice.textContent =
            plans.monthly.basic;

        standardPrice.textContent =
            plans.monthly.standard;

        premiumPrice.textContent =
            plans.monthly.premium;


        basicPeriod.textContent = "/month";

        standardPeriod.textContent = "/month";

        premiumPeriod.textContent = "/month";


        monthlyBtn.classList.add("active");

        yearlyBtn.classList.remove("active");

    }


    if (type === "yearly") {

        basicPrice.textContent =
            plans.yearly.basic;

        standardPrice.textContent =
            plans.yearly.standard;

        premiumPrice.textContent =
            plans.yearly.premium;


        basicPeriod.textContent = "/year";

        standardPeriod.textContent = "/year";

        premiumPeriod.textContent = "/year";


        yearlyBtn.classList.add("active");

        monthlyBtn.classList.remove("active");

    }

}


// ================= SUBSCRIBE =================

function subscribe(planName) {

    const message =
        document.getElementById("subscriptionMessage");


    message.textContent =
        `You selected the ${planName} subscription plan.`;

    message.style.display = "block";


    setTimeout(function() {

        message.style.display = "none";

    }, 3000);

}