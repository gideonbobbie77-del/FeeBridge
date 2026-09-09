import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
// YOUR SUPABASE KEYS
const SUPABASE_URL = 'https://vdpkpvvkrzolmvolwsek.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkcGtwdnZrcnpvbG12b2x3c2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2OTQyNDksImV4cCI6MjEwNDI3MDI0OX0.zpIsevwplJ3jAjE2GAsE7tTGtfXpkaievPmcY4nL6P8'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// GET FORM ELEMENTS
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const signupBtn = document.getElementById('signup')
const loginBtn = document.getElementById('login')
const errorMsg = document.getElementById('msg')

// SIGN UP FUNCTION
signupBtn.addEventListener('click', async () => {
  const email = emailInput.value
  const password = passwordInput.value
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    errorMsg.innerText = error.message
    errorMsg.style.color = 'red'
  } else {
    alert('Account created! Check your email to confirm')
    window.location.href = 'dashboard.html'
  }
})

// LOGIN FUNCTION
loginBtn.addEventListener('click', async () => {
  const email = emailInput.value
  const password = passwordInput.value
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    errorMsg.innerText = 'Login Failed: ' + error.message
    errorMsg.style.color = 'red'
  } else {
    window.location.href = 'dashboard.html'
  }
}) } } }                          }
