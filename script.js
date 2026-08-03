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

// Signup
async function signup() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const { data, error } = await client.auth.signUp({
        email,
        password
    });

    if (error) {
        document.getElementById("message").innerHTML = error.message;
        console.error(error);
    } else {
        document.getElementById("message").innerHTML =
            "Account created successfully! Check your email.";
        console.log(data);
    }
}

// Login
async function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const { data, error } = await client.auth.signInWithPassword({
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

// Logout
async function logout() {
    await client.auth.signOut();
    window.location.href = "index.html";
}
let isSubmitting = false;

async function signup() {
  if (isSubmitting) return;
  isSubmitting = true;

  try {
    const { data, error } = await supabase.auth.signUp({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });

    if (error) {
      console.error(error.message);
      alert("Signup failed: " + error.message);
    } else {
      alert("Signup successful!");
    }
  } finally {
    isSubmitting = false;
  }
}
