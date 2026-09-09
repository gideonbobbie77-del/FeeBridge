import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://vdpkpvkkrzvlmovlewsek.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkcGtwdmtrcnp2bG1vd2xld3NlayIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzU3NDA5ODg5LCJleHAiOjIwNzI5ODU4ODl9.9H3f4bN7qX8zY1wV2eR3tU4iO5pA6sD7fG8hJ9kL0mN'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

window.signup = async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const { error } = await supabase.auth.signUp({ email, password })
  document.getElementById('msg').innerText = error ? error.message : 'Check email to confirm!'
}

window.login = async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if(error) document.getElementById('msg').innerText = error.message
  else window.location.href = 'dashboard.html'
}
