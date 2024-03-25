import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Index';
import PageHeading from '../components/PageHeading/Index';
import PageActivityIndicator from '../components/loader/PageActivityIndicator';


export default function AboutUs() {
    
    return (
        <Box>
            <Header />

            <PageActivityIndicator />

            <PageHeading 
                title={"About Us"}
            />

            <Container minW={"6xl"} mt={"20"}>
                <Box minH={"800px"}>
                    <Heading as={"h2"} textAlign={"center"}>
                        What is Independent Cinema App?
                    </Heading>

                    <Heading as={"h3"} textAlign={"center"} mt={10}>
                        Mission
                    </Heading>

                    <Text as={"p"} fontSize="lg">
                    At Independent Cinema Page, our mission is to be the premier online destination for independent cinema enthusiasts, providing a comprehensive platform that enhances the movie-watching experience. We are driven by a shared passion for cinema and a commitment to creating a space where users can immerse themselves in the world of independent films.
                    </Text>


                    <Heading as={"h3"} textAlign={"center"} mt={10}>
                        Vission
                    </Heading>
                    We envision Independent Cinema Page as a vibrant and inclusive community hub where the love for independent cinema thrives. Our vision is to offer users a seamless and enjoyable platform, fostering connections among movie enthusiasts, filmmakers, and critics. Through curated content, convenient ticket purchasing, and unbiased reviews, we aim to elevate the independent cinema experience for our global audience.

                    <Heading as={"h3"} textAlign={"center"} mt={10}>
                    Values:</Heading>
                    <Text as={"p"} fontSize="lg">
                    <ul>
                    <li>Passion for Cinema: We are driven by our love for independent cinema, and this passion fuels every aspect of our platform.</li>

                    <li>User-Centric Approach: Putting our users first, we strive to provide a user-friendly interface, relevant content, and efficient ticketing services.</li>

                    <li>Inclusivity: We celebrate diversity in both films and our user community, recognizing the richness that different perspectives bring to the world of cinema.</li>

                    <li>Transparency and Objectivity: Our commitment to honest and objective reviews ensures that users can make informed decisions about their movie choices.</li>

                    <li>Community Engagement: We believe in the power of the collective cinema experience and actively encourage user participation, fostering a sense of community and shared excitement.</li>


                    <li>Comprehensive Movie Information: We keep users informed about the latest independent film releases, special events, and industry news, ensuring they are always in the know.</li>

                    <li>Effortless Ticket Purchasing: Our platform provides a convenient and secure way for users to purchase cinema tickets, making the process hassle-free.</li>

                    <li>Unbiased Reviews: Our dedicated team of film critics works tirelessly to deliver honest and objective reviews, guiding users in their movie choices.</li>

                    <li>User Participation: We actively engage our community, inviting users to share their own reviews, recommendations, and thoughts, fostering a dynamic exchange of ideas.</li>

                    <li>Dynamic Team: Our development team, comprised of Nicolas, Prabh, Adrian, Navdeep, Lalit, and Amanpreet, is dedicated to continuously improving and innovating the platform to enhance the cinematic journey for our users.</li>
                    </ul>

                    Thank you for being a part of our film community. We look forward to continuously growing and evolving with you, making Independent Cinema Page the ultimate destination for independent cinema enthusiasts worldwide.
                    </Text>

                    <Heading as={"h2"} textAlign={"center"} mt={10}>
                        Our Team
                    </Heading>
                    <Text as={"p"}fontSize="lg" align={"center"}>
                        Our success is attributed to the dedicated and passionate individuals who make up our team. We are a diverse group of six movie enthusiasts, brought together by a common love for cinema and a desire to create a remarkable movie-watching experience for you.
                    </Text>
                    
                    {/* <Heading as={"h2"} textAlign={"center"}>
                        Meet the Team
                    </Heading> */}
                    
                    <Text fontWeight={"bold"} as={"h3"} textAlign={"left"} mt={5}>
                        Development Team
                    </Text>
                    <ul>
                        <li>Nicolas</li>
                        <li>Prabh</li>
                        <li>Adrian</li>
                        <li>Navdeep</li>
                        <li>Lalit</li>
                        <li>Amanpreet</li>
                    </ul>

                    <Text>
                        Together, we form a dynamic team, united by a shared passion for cinema and a commitment to providing you with an unforgettable movie experience. We are grateful for your support and look forward to enhancing your cinematic journey with our website.
                    </Text>
                    <Text fontWeight={"bold"} align={"center"} mt={10}>
                        Lights, camera, and let's make movie magic together!
                    </Text>

                </Box>
            </Container>

            <Footer />
        </Box>
    )
}
