<template>
  <div>
    <button @click="login">login</button>
    <button @click="getUser" style="margin-left: 20px">getUser</button>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

const login = async () => {
  await supabase.auth.signInWithPassword({ email: 'test@test.com', password: 'testpassword' })
}

const getUser = async () => {
  const user = await $fetch('/api/getUser',{
    headers: useRequestHeaders(['cookie'])
  })
}
</script>
