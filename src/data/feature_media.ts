export type FeatureMediaKind = 'image' | 'video' | 'placeholder';

export type FeatureMediaItem = {
	id: string;
	group: string;
	title: string;
	summary: string;
	kind: FeatureMediaKind;
	asset?: string;
	poster?: string;
	docsHref?: string;
};

export type FeatureMediaGroup = {
	id: string;
	title: string;
	summary: string;
	items: FeatureMediaItem[];
};

export const featureMediaGroups: FeatureMediaGroup[] = [
	{
		id: 'workspace_screens',
		title: 'Workspace Screens',
		summary: 'The first impression: launch, full workspace shape, and the screen surfaces Yazelix owns.',
		items: [
			{
				id: 'workspace-overview',
				group: 'workspace_screens',
				title: 'Current workspace',
				summary: 'Managed Zellij layout with Yazi, editor pane, popups, and status surfaces in one runtime.',
				kind: 'image',
				asset: '/media/features/workspace-overview.webp',
				docsHref: '/docs/runtime-model/',
			},
			{
				id: 'full-pane-yazi-startup',
				group: 'workspace_screens',
				title: 'Full-pane Yazi start',
				summary: 'Startup begins in a file-first workspace before opening into the managed editor flow.',
				kind: 'image',
				asset: '/media/features/full-pane-yazi-startup.gif',
				docsHref: '/start/',
			},
			{
				id: 'yzx-screen-surfaces',
				group: 'workspace_screens',
				title: 'yzx screen surfaces',
				summary: 'All Yazelix screen styles collected as compact visual references.',
				kind: 'image',
				asset: '/media/features/yzx-screen-surfaces.gif',
				docsHref: '/docs/runtime-model/',
			},
		],
	},
	{
		id: 'opening_files',
		title: 'Yazi Jumps And Opening',
		summary: 'Yazi navigation stays distinct from Yazelix editor retargeting: jump, search, open, reuse, and keep orientation.',
		items: [
			{
				id: 'yazi-zoxide-jump',
				group: 'opening_files',
				title: 'Z: zoxide jump in Yazi',
				summary: 'Yazi-native zoxide jump changes the active file-manager location and stays inside Yazi.',
				kind: 'image',
				asset: '/media/features/yazi-zoxide-jump.gif',
				docsHref: '/keybindings/',
			},
			{
				id: 'yazi-fzf-jump',
				group: 'opening_files',
				title: 'z: fuzzy path jump',
				summary: 'Yazi-native fuzzy find jumps to paths without retargeting the managed editor pane.',
				kind: 'image',
				asset: '/media/features/yazi-fzf-jump.gif',
				docsHref: '/keybindings/',
			},
			{
				id: 'open-zoxide-in-editor',
				group: 'opening_files',
				title: 'Alt+z: zoxide to editor',
				summary: 'Yazelix uses the zoxide picker to retarget the managed editor/workspace directly to the picked location.',
				kind: 'image',
				asset: '/media/features/open-zoxide-in-editor.gif',
				docsHref: '/keybindings/',
			},
			{
				id: 'open-editor-exists',
				group: 'opening_files',
				title: 'Editor pane exists',
				summary: 'Opening a file reuses the existing managed editor pane instead of spawning a duplicate.',
				kind: 'image',
				asset: '/media/features/open-editor-exists.webp',
				docsHref: '/docs/runtime-model/',
			},
			{
				id: 'open-editor-missing',
				group: 'opening_files',
				title: 'Editor pane missing',
				summary: 'Yazelix creates and targets the managed editor pane when it is absent.',
				kind: 'image',
				asset: '/media/features/open-editor-missing.webp',
				docsHref: '/docs/runtime-model/',
			},
			{
				id: 'hide-sidebar-off',
				group: 'opening_files',
				title: 'Keep sidebar visible',
				summary: '`editor.hide_sidebar_on_file_open = false` keeps the file tree visible after opening.',
				kind: 'image',
				asset: '/media/features/hide-sidebar-off.webp',
				docsHref: '/configure/',
			},
			{
				id: 'hide-sidebar-on',
				group: 'opening_files',
				title: 'Hide sidebar on open',
				summary: '`editor.hide_sidebar_on_file_open = true` collapses the file tree after opening.',
				kind: 'image',
				asset: '/media/features/hide-sidebar-on.webp',
				docsHref: '/configure/',
			},
		],
	},
	{
		id: 'sidebars',
		title: 'Sidebars',
		summary: 'Spatial side surfaces keep navigation and agents close without stealing the editor role.',
		items: [
			{
				id: 'toggle-sidebars',
				group: 'sidebars',
				title: 'Toggle sidebars',
				summary: '`Alt+Shift+H` and `Alt+Shift+L` show or hide the managed side surfaces.',
				kind: 'image',
				asset: '/media/features/toggle-sidebars.gif',
				docsHref: '/keybindings/',
			},
			{
				id: 'focus-left-sidebar',
				group: 'sidebars',
				title: 'Focus left sidebar',
				summary: '`Ctrl+y` toggles focus between the editor and the left Yazi file tree.',
				kind: 'image',
				asset: '/media/features/focus-left-sidebar.gif',
				docsHref: '/keybindings/',
			},
			{
				id: 'focus-right-sidebar',
				group: 'sidebars',
				title: 'Focus right sidebar',
				summary: '`Ctrl+Shift+Y` toggles focus between the editor and the right agent sidebar.',
				kind: 'image',
				asset: '/media/features/focus-right-sidebar.gif',
				docsHref: '/keybindings/',
			},
		],
	},
	{
		id: 'popups_tools',
		title: 'Popups And Tools',
		summary: 'Floating tool surfaces make common actions fast without replacing the workspace.',
		items: [
			{
				id: 'ratconfig-ui-popup',
				group: 'popups_tools',
				title: 'Config UI popup',
				summary: 'The ratconfig-backed settings UI edits JSONC settings from a managed popup.',
				kind: 'image',
				asset: '/media/features/ratconfig-ui-popup.gif',
				docsHref: '/configure/',
			},
			{
				id: 'information-popup',
				group: 'popups_tools',
				title: 'Information popup',
				summary: '`Alt+Shift+I` opens the keep-alive process information surface.',
				kind: 'image',
				asset: '/media/features/information-popup.gif',
				docsHref: '/keybindings/',
			},
			{
				id: 'menu-popup',
				group: 'popups_tools',
				title: 'Menu popup',
				summary: '`Alt+Shift+M` opens the command menu surface.',
				kind: 'image',
				asset: '/media/features/menu-popup.gif',
				docsHref: '/keybindings/',
			},
			{
				id: 'lazygit-popup',
				group: 'popups_tools',
				title: 'LazyGit popup',
				summary: 'The bottom popup keeps Git actions close to the current workspace root.',
				kind: 'image',
				asset: '/media/features/lazygit-popup.gif',
				docsHref: '/keybindings/',
			},
		],
	},
	{
		id: 'cursor_feel',
		title: 'Terminal And Cursor Feel',
		summary: 'Cursor effects and terminal variants are easier to judge visually than through prose.',
		items: [
			{
				id: 'ghostty-cursor-outside-helix',
				group: 'cursor_feel',
				title: 'Ghostty cursor outside Helix',
				summary: 'Ghostty cursor behavior in normal Yazelix surfaces.',
				kind: 'image',
				asset: '/media/features/ghostty-cursor-outside-helix.gif',
				docsHref: '/docs/runtime-model/',
			},
			{
				id: 'ghostty-cursor-inside-helix',
				group: 'cursor_feel',
				title: 'Ghostty cursor inside Helix',
				summary: 'How the Ghostty cursor effect behaves in the managed editor.',
				kind: 'image',
				asset: '/media/features/ghostty-cursor-inside-helix.gif',
				docsHref: '/docs/runtime-model/',
			},
			{
				id: 'yzxterm-cursor-outside-helix',
				group: 'cursor_feel',
				title: 'yzxterm cursor outside Helix',
				summary: 'First-party terminal cursor behavior outside the editor.',
				kind: 'image',
				asset: '/media/features/yzxterm-cursor-outside-helix.gif',
				docsHref: '/docs/runtime-model/',
			},
			{
				id: 'yzxterm-cursor-inside-helix',
				group: 'cursor_feel',
				title: 'yzxterm cursor inside Helix',
				summary: 'First-party terminal cursor behavior inside the managed editor.',
				kind: 'image',
				asset: '/media/features/yzxterm-cursor-inside-helix.gif',
				docsHref: '/docs/runtime-model/',
			},
		],
	},
	{
		id: 'visual_settings',
		title: 'Status And Visual Settings',
		summary: 'Static comparisons are the right medium for widgets, frames, corners, and visual toggles.',
		items: [
			{
				id: 'widget-photos',
				group: 'visual_settings',
				title: 'Status widgets',
				summary: 'Photos of editor, shell, terminal, cursor, usage, CPU, and RAM widgets.',
				kind: 'image',
				asset: '/media/features/widget-photos.webp',
				docsHref: '/configure/',
			},
			{
				id: 'yazi-git-decorations',
				group: 'visual_settings',
				title: 'Yazi git decorations',
				summary: 'Git status decorations in the managed Yazi file tree show repository changes from the sidebar.',
				kind: 'image',
				asset: '/media/features/yazi-git-decorations.webp',
				docsHref: '/configure/',
			},
			{
				id: 'sidebar-starship-icons',
				group: 'visual_settings',
				title: 'Icon-only Starship prompt',
				summary: 'The sidebar shell prompt uses a compact Starship setup with only icons so it fits the narrow pane.',
				kind: 'image',
				asset: '/media/features/sidebar-starship-icons.webp',
				docsHref: '/configure/',
			},
			{
				id: 'pane-frames-on-off',
				group: 'visual_settings',
				title: 'Pane frames on and off',
				summary: 'Side-by-side comparison for the pane frame setting.',
				kind: 'image',
				asset: '/media/features/pane-frames-on-off.webp',
				docsHref: '/configure/',
			},
			{
				id: 'rounded-corners-on-off',
				group: 'visual_settings',
				title: 'Rounded corners on and off',
				summary: 'Side-by-side comparison for rounded workspace corners.',
				kind: 'image',
				asset: '/media/features/rounded-corners-on-off.webp',
				docsHref: '/configure/',
			},
		],
	},
];

export const homepageFeatureIds = [
	'workspace-overview',
	'open-zoxide-in-editor',
	'ratconfig-ui-popup',
	'lazygit-popup',
];

export function featureItemsById(): Map<string, FeatureMediaItem> {
	return new Map<string, FeatureMediaItem>(
		featureMediaGroups.flatMap((group) => group.items.map((item) => [item.id, item] as const)),
	);
}
