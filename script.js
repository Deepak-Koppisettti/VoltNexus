// ==========================
// VoltNexus JavaScript
// ==========================

// Supabase Configuration
const SUPABASE_URL = "https://mgczlyneilinugdjdurx.supabase.co";
const SUPABASE_KEY = "sb_publishable_kdwiePDeiSubqM9mgRQptw_4cLGRgVc";

const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Welcome to VoltNexus");

// Show welcome message
window.onload = function () {
    console.log("VoltNexus Loaded Successfully!");
};

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// Sign up a new user
async function signUp(email, password) {
  const { data, error } = await client.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Signup error:", error.message);
    document.getElementById("message").innerHTML = "Signup failed!";
  } else {
    console.log("Signup successful:", data);
    document.getElementById("message").innerHTML = "Account created successfully!";

    // Redirect after signup
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  }
}

// Card hover animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// Check Supabase connection
console.log("VoltNexus Connected!");

client.auth.getSession().then(({ data, error }) => {
    if (error) {
        console.error("Supabase Error:", error);
    } else {
        console.log("Supabase Connected Successfully!", data);
    }
});

// ==========================
// Signup
// ==========================
async function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { error } = await client.auth.signUp({
        email,
        password
    });

    if (error) {
        document.getElementById("message").innerHTML = error.message;
    } else {
        document.getElementById("message").innerHTML =
            "Account created successfully! Please check your email.";
    }
}

// ==========================
// Login
// ==========================
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { error } = await client.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        document.getElementById("message").innerHTML = error.message;
    } else {
        document.getElementById("message").innerHTML = "Login successful!";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    }
}

// ==========================
// Logout
// ==========================
async function logout() {
    await client.auth.signOut();
    window.location.href = "index.html";
}
