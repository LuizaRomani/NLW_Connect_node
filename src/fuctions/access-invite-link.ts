import { redis } from '../redis/client'

interface AccessInviteLinkParams {
  subscriberId: string
}
export async function accessInviteLink({ subscriberId }: AccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
  // adicionanr o id do usuario e ir incrementando a cada chamada. 'hash increment by'
}
