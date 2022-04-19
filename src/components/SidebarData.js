import React from "react";

import IconBranding from "../iconComponents/IconBranding";
import IconGamification from "../iconComponents/IconGamification";
import IconLanguage from "../iconComponents/IconLanguage";
import IconMyProfile from "../iconComponents/IconMyProfile";
import IconNotification from "../iconComponents/IconNotification";
import IconOrganisation from "../iconComponents/IconOrganisation";
import IconPlugin from "../iconComponents/IconPlugin";
import IconSearch from "../iconComponents/IconSearch";
import IconRoles from "../iconComponents/IconRoles";
import IconSubscription from "../iconComponents/IconSubscription";

export const SidebarData = [
  {
    title: "Organisation",
    path: "/",
    icon: <IconOrganisation />,
    cName: "nav-text",
  },
  {
    title: "Roles",
    path: "/roles",
    icon: <IconRoles />,
    cName: "nav-text",
  },
  {
    title: "Subscription",
    path: "/subscription",
    icon: <IconSubscription />,
    cName: "nav-text",
  },
  {
    title: "Plugin",
    path: "/plugin",
    icon: <IconPlugin />,
    cName: "nav-text",
  },
  {
    title: "Branding",
    path: "/branding",
    icon: <IconBranding />,
    cName: "nav-text",
  },
  {
    title: "Gamification",
    path: "/gamification",
    icon: <IconGamification />,
    cName: "nav-text",
  },
  {
    title: "Notification",
    path: "/Notification",
    icon: <IconNotification />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/myprofile",
    icon: <IconMyProfile />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <IconSearch />,
    cName: "nav-text",
  },
  {
    title: "EN",
    path: "/language",
    icon: <IconLanguage />,
    cName: "nav-text",
  },
];
