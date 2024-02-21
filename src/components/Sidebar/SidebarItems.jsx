import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import Contact from "./Contact";
import Users from "./Users";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Users />
			<Notifications />
			<CreatePost />
			<ProfileLink />
			<Contact />
		</>
	);
};

export default SidebarItems;
