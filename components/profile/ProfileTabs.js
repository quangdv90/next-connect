import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Post from '../../components/index/Post';
import FollowTab from '../../components/profile/FollowTab';

class ProfileTabs extends React.Component {
    state = {
        tab: 0
    };

    handleTabChange = (event, value) => {
        this.setState({ tab: value });
    }

    render() {
        const {
            posts,
            auth,
            user,
            isDeletingPost,
            handleDeletePost,
            handleToggleLike,
            handleAddComment,
            handleDeleteComment
        } = this.props;

        const { tab } = this.state;

        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={tab}
                        onChange={this.handleTabChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="fullWidth">

                        <Tab label="Posts" />
                        <Tab label="Following" />
                        <Tab label="Followers" />
                    </Tabs>
                </AppBar>

                {/* Posts Tab */}
                {tab === 0 && (
                    <TabContainer>
                        {posts.map(post => (
                            <Post
                                key={post._id}
                                auth={auth}
                                post={post}
                                isDeletingPost={isDeletingPost}
                                handleDeletePost={handleDeletePost}
                                handleToggleLike={handleToggleLike}
                                handleAddComment={handleAddComment}
                                handleDeleteComment={handleDeleteComment} />
                        ))}
                    </TabContainer>
                )}

                {/* Following Tab */}
                {tab === 1 && (
                    <TabContainer>
                        <FollowTab users={user.following} />
                    </TabContainer>
                )}

                {/* Followers Tab */}
                {tab === 2 && (
                    <TabContainer>
                        <FollowTab users={user.followers} />
                    </TabContainer>
                )}
            </div>
        );
    }
}

const TabContainer = ({ children }) => (
    <Typography component="div" style={{ padding: '1em' }}>
        {children}
    </Typography>
)

export default ProfileTabs;
