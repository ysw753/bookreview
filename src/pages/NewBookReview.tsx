import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewReview } from "../api/firebase";
import { useAuthContext, User } from "../context/AuthContext";
import { getBookInfo } from "../api/kakaobook";
import FindCard from "../components/FindCard";
import { useNavigate } from "react-router-dom";

export type ReviewData = {
  id: string;
  title: string;
  image: string;
  contents: string;
  createdby: string;
  count: number;
};

const NewBookReview = () => {
  const { user } = useAuthContext() as { user: User };
  const navigate = useNavigate();
  const [reviewData, setReviewData] = useState<ReviewData>({
    id: "",
    title: "",
    image: "",
    contents: "",
    createdby: user?.displayName,
    count: 0,
  });
  const [findIdx, setFindIdx] = useState([]);

  const [image, setImage] = useState<string | null>(null);

  const [success, setSuccess] = useState<string | boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };
  const changeFindDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    getBookInfo(query).then((data) => setFindIdx(data.documents));
  };
  const clickHandler = (data: any) => {
    console.log(data);
    setImage(data.url);
    setFindIdx([]);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //검색데이터를 받아와서 사진을 cloudinary에 업로드하고 url을 획득
    //firebase에 새로운 리뷰를 추가
    uploadImage(image).then((url) => {
      addNewReview(reviewData, url).then(() => {
        setSuccess("업로드 완료!!!");
        navigate("/");
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      });
    });

    // console.log(reviewData);
  };
  return (
    <section className="w-full">
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold my-4">독후감 작성 페이지</h2>
        <input
          className=" p-2.5 w-1/2 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={changeFindDataHandler}
          placeholder="책을 검색해주세요"
        ></input>
        {findIdx?.length > 0 && (
          <ul className="w-full h-80 overflow-scroll overflow-x-hidden z-10">
            {findIdx?.map((data: any) => (
              <FindCard data={data} clickHandler={clickHandler} />
            ))}
          </ul>
        )}

        {success && <p className="my-2">{success}</p>}
        {image && (
          <img
            className="m-auto"
            src={image ? image : "http://via.placeholder.com/120X150"}
            alt="image file"
          />
        )}
      </div>
      <form className="mt-10 flex flex-col px-12 " onSubmit={handleSubmit}>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          제목
        </label>
        <input
          id="title"
          className="mb-10 block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="title"
          value={reviewData.title ?? ""}
          placeholder="책이름"
          required
          onChange={handleChange}
        />
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          내용을 입력해주세요
        </label>

        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="contents"
          rows={20}
          value={reviewData.contents ?? ""}
          placeholder="내용을 입력해주세요"
          onChange={handleChange}
        ></textarea>
        <Button text={"업로드"} />
      </form>
    </section>
  );
};

export default NewBookReview;
