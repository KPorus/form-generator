import { Container, Flex, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import logo from "/public/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Link href="/" className="mb-5">
        <Image
          src={logo}
          alt="logo"
          width={500}
          height={500}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "100%",
          }}
        />
      </Link>

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
