import { PrismaClient } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export const metadata = { title: "Zoznam prispevkov | INSTAGRAM" };
const prisma = new PrismaClient();

export default async function PostsList() {
  // Fetch posts from Prisma database, including user's name
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      imageUrl: true,
      caption: true,
      user: {
        select: {
          name: true, // Fetching the user's name without altering the schema
        },
      },
    },
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Zoznam prispevkov
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center", // Center-align content
            }}
          >
            {/* Center the image */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={post.imageUrl}
                alt={post.caption || "Post image"}
                width={200}
                height={200}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Display username */}
            <Typography
              variant="body2"
              color="textPrimary"
              style={{ marginTop: "8px", fontWeight: "bold" }}
            >
              {post.user?.name || "Unknown User"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginTop: "4px" }}
            >
              {post.caption}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "8px",
              }}
            >
              <FavoriteBorderIcon style={{ cursor: "pointer" }} />
              <ChatBubbleOutlineIcon style={{ cursor: "pointer" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
