export async function GET() {
  // connect to db & get data
  const guides = [
    { id: 1, title: "Some title1" },
    { id: 2, title: "Some title2" },
    { id: 3, title: "Some title3" },
    { id: 4, title: "Some title4" },
  ];

  return new Response(
    JSON.stringify(
      {
        guides: guides,
      },
      200
    )
  );
}
