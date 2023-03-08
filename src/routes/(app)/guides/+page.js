export async function load({ fetch }) {
  const res = await fetch("/guides");
  const { guides } = await res.json();
  if (res.ok) {
    return {
      guides: guides,
    };
  } else {
    throw error(404, "not found abi");
  }
}
