"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Image from "next/image";

// Define the Post type to match the API response
interface Post {
  id: string;
  imageUrl: string;
  caption?: string; // Caption is optional
  user?: {
    name: string;
  };
}

export default function Find() {
  const [searchQuery, setSearchQuery] = useState<string>(""); // User's search input
  const [posts, setPosts] = useState<Post[]>([]); // All posts
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]); // Posts to display

  // Fetch posts from the correct API endpoint
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`/api/posts${searchQuery ? `?query=${searchQuery}` : ""}`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data: Post[] = await response.json();
        setPosts(data); // Populate the posts state
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, [searchQuery]); // Re-fetch posts when the search query changes

  // Determine which posts to display based on the search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setDisplayedPosts(posts.slice(0, 10)); // Show the first 10 posts when the search bar is empty
    } else {
      setDisplayedPosts(posts); // Show all posts that match the search query
    }
  }, [searchQuery, posts]);

  return (
    <Container>
      {/* Add <head> for dynamic title */}
      <Head>
        <title>Hľadanie | ZoškaSnap</title>
      </Head>

      {/* Search Box */}
      <TextField
        label="Vyhľadajte používateľa alebo obsah príspevku"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ marginBottom: 4, marginTop: 2 }}
      />

      {/* Display Posts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 2,
        }}
      >
        {displayedPosts.map((post) => (
          <Box
            key={post.id}
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              padding: 2,
              backgroundColor: "#fff",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            {/* Center the image */}
            <Box
              sx={{
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
            </Box>
            <Typography variant="body1" fontWeight="bold" sx={{ marginTop: 1 }}>
              {post.user?.name || "Neznámy používateľ"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {post.caption}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
