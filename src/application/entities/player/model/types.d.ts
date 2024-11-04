export interface PlayerModel {
  profile: ProfileModel;
  rank_tier: number;
  leaderboard_rank: numer;
}

export interface ProfileModel {
  account_id: number;
  personaname: string;
  name: string;
  plus: boolean;
  cheese: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  last_login: boolean;
  loccountrycode: string;
  status: string;
  fh_unavailable: boolean;
  is_contributor: boolean;
  is_subscriber: boolean;
}
