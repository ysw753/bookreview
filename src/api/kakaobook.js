export async function getBookInfo(query) {
  const bookData = await fetch(
    `https://dapi.kakao.com/v3/search/book?target=title&query=${query}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKKO_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await bookData.json();
}
