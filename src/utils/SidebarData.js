import { Dashboard, Group, Leaderboard, ManageSearch, Person, PostAdd } from "@mui/icons-material";
import Candidate from "../components/pages/dashboard/candidate/Candidate";
import JobSearch from "../components/pages/dashboard/jobSearch/JobSearch";
import Main from "../components/pages/dashboard/main/Main";
import Profile from "../components/pages/dashboard/profile/Profile";
import Manage from "../components/pages/dashboard/vacancy/Manage";
import PostVacancy from "../components/pages/dashboard/vacancy/PostVacancy";

export const list =
    [
        {
            id: 1,
            title: "Main",
            icon: <Dashboard />,
            link: "",
            components: <Main />,
            tooltip: "Dashboard"
        },
        {
            id: 2,
            title: "Profile",
            icon: < Person />,
            link: "Profile",
            components: <Profile />,
            tooltip: "Profile"
        },
        {
            id: 3,
            title: "Add Vacancy",
            icon: <PostAdd />,
            link: "Vacancy",
            components: <PostVacancy />,
            tooltip: "Add Vacancy"
        },
        {
            id: 4,
            title: "Manage Vacancy",
            icon: <Leaderboard />,
            link: "Manage",
            components: <Manage />,
            tooltip: "Manage Vacancy"
        },
        {
            id: 5,
            title: "Candidates",
            icon: <Group />,
            link: "Candidate_list",
            components: <Candidate />,
            tooltip: "Candidate"
        },
        {
            id: 6,
            title: "Search Job",
            icon: <ManageSearch />,
            link: "search_job",
            components: <JobSearch />,
            tooltip: "Search Job"
        },
        {
            id: 7,
            title: "Candidates",
            icon: <Group />,
            link: "Candidate_list",
            components: <Candidate />,
            tooltip: "Candidate"
        },
    ]