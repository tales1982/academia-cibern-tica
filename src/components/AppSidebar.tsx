import {
  Home,
  LayoutDashboard,
  BookOpen,
  Wrench,
  BookA,
  Terminal,
  Shield,
  Sword,
  ShieldCheck,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Início", url: "/", icon: Home },
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Módulos", url: "/lessons", icon: BookOpen },
  { title: "Ferramentas", url: "/tools", icon: Wrench },
  { title: "Glossário", url: "/glossary", icon: BookA },
  { title: "Terminal", url: "/terminal", icon: Terminal },
];

const tracks = [
  { title: "Common Core", url: "/lessons?track=common", icon: Shield },
  { title: "Ofensivo", url: "/lessons?track=offensive", icon: Sword },
  { title: "Defensivo", url: "/lessons?track=defensive", icon: ShieldCheck },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const isActive = (path: string) => {
    if (path.includes("?")) return location.pathname + location.search === path;
    return location.pathname === path;
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent>
        <div className="p-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary shrink-0" />
          {!collapsed && (
            <span className="font-bold text-primary text-lg tracking-tight glow-text-green">
              CyberAcademy
            </span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wider">
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-secondary/50 transition-colors"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wider">
            Trilhas
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tracks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="hover:bg-secondary/50 transition-colors"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
