import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../src/theme";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ParticleBG from "../components/ParticleBG";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch("https://f5q3fpnrp8.execute-api.us-east-1.amazonaws.com/production/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send the message. Please try again.");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Error sending the message. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Contact - Kyle Smigelski</title>
                <meta name="description" content="Contact page" />
            </Head>
            <ParticleBG id="tsparticles" />
            <Box alignContent="center" sx={{ p: 4 }}>
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ my: 4, fontFamily: 'Fjalla One', color: 'white' }}
                >
                    Contact Me
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: "600px", mx: "auto" }}>
                    <TextField
                        label="Your Name"
                        name="name"
                        fullWidth
                        required
                        value={formData.name}
                        onChange={handleChange}
                        sx={{ mb: 3, bgcolor: 'white' }}
                    />
                    <TextField
                        label="Your Email"
                        name="email"
                        type="email"
                        fullWidth
                        required
                        value={formData.email}
                        onChange={handleChange}
                        sx={{ mb: 3, bgcolor: 'white' }}
                    />
                    <TextField
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        value={formData.message}
                        onChange={handleChange}
                        sx={{ mb: 3, bgcolor: 'white' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        disabled={isSending}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
