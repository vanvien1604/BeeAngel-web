import { Box } from '@mui/material';
import "../../../../../publics/styles/style-admin/chat.scss"
import List_userChat from './box-left/list_userChat';
import Main_boxRight from './box-right/main_boxRight';

const ChatApp = () => {
    return (
        <Box display="flex" height="100vh">
            <List_userChat />
            <Main_boxRight />
        </Box>
    );
};

export default ChatApp;
