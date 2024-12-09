import { useEffect, useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './myPF'
import styles from "./myPF";
function MyProfile() {
    const fullText = "Thanh Long";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const password = "mySecretPassword";

    useEffect(() => {
        const interval = setInterval(() => {
            if (isDeleting) {
                if (index > 0) {
                    setDisplayText((prev) => prev.slice(0, index - 1));
                    setIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setIndex(0);
                }
            } else {
                if (index < fullText.length) {
                    setDisplayText((prev) => prev + fullText[index]);
                    setIndex((prev) => prev + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        }, 500);

        return () => clearInterval(interval);
    }, [isDeleting, index, fullText]);

    return (
        <div
            style={styles.styleDiv}
        >
            <Box>
                <Typography style={styles.stylesWelconTypo}>
                    Welcome to Profile
                </Typography>
                <Typography
                    style={styles.stylesHiNameTypo}
                >
                    <span>Hi, </span>
                    {displayText}
                </Typography>
                <Box style={{ marginTop: '10px' }}>
                    <Typography style={styles.stylesIntroduceTypo}>
                        Introduce:
                    </Typography>
                    <Typography>Hello, I am a developer</Typography>
                </Box>
            </Box>

            <Box
                style={styles.stylesBox}
            >
                <Typography style={styles.stylesAboutmeTypo}>
                    About me:
                </Typography>
                <table style={styles.stylesTable}>
                    <tbody>
                        <tr>
                            <td style={styles.stylesTd}>Fullname:</td>
                            <td style={styles.stylesTd}>Phan Thanh Long</td>
                        </tr>
                        <tr>
                            <td style={styles.stylesTd}>Email:</td>
                            <td style={styles.stylesTd}>long@example.com</td>
                        </tr>
                        <tr>
                            <td style={styles.stylesTd}>Password:</td>
                            <td style={styles.stylesTdPass}>
                                <span style={styles.stylesSpanPass}>
                                    {showPassword ? password : '*************'}
                                </span>
                                <IconButton onClick={() => setShowPassword(!showPassword)} style={{ padding: '0 5px' }}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.stylesTd}>Joined at:</td>
                            <td style={styles.stylesTd}>11/15/2024</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </div>
    );
}

export default MyProfile;