export default function truncateText(text, length, link) {
  console.log(link)
  if (text.length > length) {
    return text.slice(0, length) + '...';
  } else {
    return text;
  }
}