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

function changeBilling(type) {
    document.getElementById("basicPrice").textContent = plans[type].basic;
    document.getElementById("standardPrice").textContent = plans[type].standard;
    document.getElementById("premiumPrice").textContent = plans[type].premium;

    var period = type === "yearly" ? "/year" : "/month";
    document.getElementById("basicPeriod").textContent = period;
    document.getElementById("standardPeriod").textContent = period;
    document.getElementById("premiumPeriod").textContent = period;

    document.getElementById("monthlyBtn").classList.toggle("active", type === "monthly");
    document.getElementById("yearlyBtn").classList.toggle("active", type === "yearly");
}

function subscribe(planName) {
    var message = document.getElementById("subscriptionMessage");
    message.textContent = "You selected the " + planName + " subscription plan.";
    message.style.display = "block";

    setTimeout(function () {
        message.style.display = "none";
    }, 3000);
}