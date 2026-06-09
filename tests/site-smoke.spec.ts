import { expect, test } from '@playwright/test';

const routes = [
	'/',
	'/start/',
	'/configure/',
	'/update/',
	'/recover/',
	'/keybindings/',
	'/docs/',
	'/blog/',
	'/blog/docs-that-respect-runtime-boundaries/',
];

for (const route of routes) {
	test(`${route} renders without horizontal overflow`, async ({ page }) => {
		await page.goto(route);
		await expect(page.locator('body')).toBeVisible();
		await expect(page).toHaveTitle(/Yazelix/);
		const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
		expect(overflow).toBe(false);
	});
}

test('home page exposes product and docs actions', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Yazelix' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Start with Yazelix' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Read the docs' })).toBeVisible();
});

test('blog index exposes multiple dated posts', async ({ page }) => {
	await page.goto('/blog/');
	await expect(page.getByRole('link', { name: 'Read post' })).toHaveCount(3);
	await expect(page.getByRole('heading', { name: 'Docs that respect runtime boundaries' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'A reproducible terminal workspace' })).toBeVisible();
});
