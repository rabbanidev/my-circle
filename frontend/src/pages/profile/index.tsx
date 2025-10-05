import type React from "react";
import MetaData from "../../components/meta/MetaData";
import CreatePost from "../../components/post/CreatePost";
import About from "../../components/profile/About";
import AddCoverPhoto from "../../components/profile/AddCoverPhoto";
import AddProfilePhoto from "../../components/profile/AddProfilePhoto";
import ProfileAction from "../../components/profile/ProfileAction";
import ProfileNameBio from "../../components/profile/ProfileNameBio";
import RcentPost from "../../components/profile/RcentPost";
import ProfileSkeleton from "../../components/skeleton/ProfileSkeleton";
import { useGetMyInfoQuery } from "../../rtk/features/user/userApi";
import { Error } from "../../components/ui/error";
import type { IError } from "../../types";

export default function Profile() {
  const { isLoading, isError, error, data: user } = useGetMyInfoQuery();

  // TODO: Decide what to show while loading and error
  let content: React.ReactNode = null;
  if (isLoading) {
    content = <ProfileSkeleton />;
  } else if (!isLoading && isError) {
    content = <Error message={(error as IError)?.message} />;
  } else if (!isLoading && !isError && !user) {
    content = <Error message="User not found." />;
  } else {
    content = (
      <>
        <div className="relative">
          <AddCoverPhoto name={user.name} />
          <div className="flex flex-col relative top-3 md:flex-row md:items-end gap-4 md:gap-6 px-4 md:px-6 -mt-16 md:-mt-20">
            <div className="flex justify-center md:block shrink-0">
              <AddProfilePhoto name={user.name} />
            </div>

            <div className="flex-1 text-center md:text-left pb-4">
              <ProfileNameBio name={user.name} bio={user.bio} />
              <div className="mt-3 flex justify-center md:justify-start">
                <ProfileAction />
              </div>
            </div>
          </div>
        </div>

        <About about={user.about} />

        <div className="pt-10 px-4 md:px-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Create new post
          </h2>
          <div className="max-w-[560px] mx-auto md:mx-0">
            <CreatePost />
          </div>
        </div>

        <RcentPost />
      </>
    );
  }

  return (
    <>
      <MetaData title="My Circle | Golam Rabbani" description="Bio" />
      <div className="min-h-screen mx-auto max-w-4xl">{content}</div>
    </>
  );
}
