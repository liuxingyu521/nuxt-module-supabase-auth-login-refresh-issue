import { serverSupabaseUser } from '#supabase/server'

export default eventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  return user;
});