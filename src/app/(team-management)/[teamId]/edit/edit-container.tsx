import { notFound } from "next/navigation";

import getGroupData from "@/lib/api/group/get-group-data";
import getTeamAdmin from "@/utils/get-team-admin";

import EditTeamForm from "../../_components/edit-team-form";

interface EditContainerProps {
  teamId: number;
  userId?: string;
}

const EditContainer = async ({ teamId, userId }: EditContainerProps) => {
  try {
    const res = await getGroupData(teamId);

    const adminId = getTeamAdmin(res.members);

    if (adminId !== Number(userId)) {
      notFound();
    }

    return <EditTeamForm id={teamId} name={res.name} image={res.image} />;
  } catch (error) {
    throw new Error("에러발생");
  }
};

export default EditContainer;
