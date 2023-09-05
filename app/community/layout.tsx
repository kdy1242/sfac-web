import CommunityTopBox from "@/app/components/community_top_box";

export default function Community({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <CommunityTopBox/>
    { children }
  </>
}
