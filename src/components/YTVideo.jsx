function YTVideo({ url }) {
  return (
    <>
      <div class="aspect-video min-h-60 overflow-hidden rounded-2xl lg:min-h-64">
        <iframe
          class="h-full w-full"
          src={url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default YTVideo;
