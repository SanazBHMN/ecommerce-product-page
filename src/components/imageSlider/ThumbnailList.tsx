interface ThumbnailListProps {
  thumbnails: string[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
}

function ThumbnailList({
  thumbnails,
  currentIndex,
  onThumbnailClick,
}: ThumbnailListProps) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {thumbnails.map((thumb, index) => (
        <img
          key={index}
          src={thumb}
          width={80}
          height={80}
          style={{
            border:
              index === currentIndex
                ? "2px solid orange"
                : "2px solid transparent",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => onThumbnailClick(index)}
        />
      ))}
    </div>
  );
}

export default ThumbnailList;
