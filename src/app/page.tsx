import { Container, Flex, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="xl">
        <Flex
          direction="column"
          gap={6}
          justify="center"
          align="center"
          bg="white"
          p={10}
          rounded="xl"
          boxShadow="lg"
        >
          <Text fontSize="4xl" fontWeight="bold" color="gray.800">
            🧑‍💻 Build Forms Easily
          </Text>
          <Text fontSize="md" textAlign="center" color="gray.600">
            Generate React/Next.js forms without writing code.
          </Text>
          <Link
            href="/create-form"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
