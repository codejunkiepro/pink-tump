import { Suspense } from "react";
import { getTokens } from "@/lib/data/get-tokens";

import { HomeView } from "@/views/home-view";

export default async function Page() {
  const tokens = await getTokens();
  console.log("tokens", tokens);

  return <HomeView tokens={tokens} />;
}
