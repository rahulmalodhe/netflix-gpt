export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_LOGO =
  "https://occ-0-5277-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + " "+ import.meta.env.VITE_TMDB_KEY,
  },
};

export const POSTER_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANG = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "kannada", name: "Kannada"},
];

export const OPENAI_GPT_KEY = import.meta.env.VITE_OPENAI_GPT_KEY;
