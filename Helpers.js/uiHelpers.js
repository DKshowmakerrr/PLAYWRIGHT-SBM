// hàm dùng cho label
async function testLabels({ page, locator, expectText, shouldBeVisible = true, exactMatch = true }) {
  const label = page.locator(locator);

  if (shouldBeVisible) {
    await expect(label).toBeVisible;
  } else {
    await expect(label).toBeHidden;
  }

  if (expectText) {
    await expect(label).toHaveText(expectText);
  }
}

//hàm dùng cho textbox
async function testTextbox({
  page,
  locator,
  shouldBeVisible = true,
  shouldBeEnabled = true,
  placeholder,
  click = false,
  isEmpty = true,
  keyword,
}) {
  const textbox = page.locator(locator)

  if()
}

// hàm dùng cho button
async function testButtons({
  page,
  locator,
  shouldBeVisible = true,
  shouldBeEnabled = true,
  click = false,
  expectUrlAfterClick,
}) {
  const button = page.locator(locator);
  if (shouldBeVisible) {
    await expect(button).toBeVisible();
  } else {
    await expect(button).toBeHidden();
  }

  if (shouldBeEnabled) {
    await expect(button).toBeEnabled();
  } else {
    await expect(button).toBeDisabled();
  }

  if (click) {
    await button.click();

    if (expectUrlAfterClick) {
      await expect(page).toHaveURL(expectUrlAfterClick);
    }

    /*     if (expectTextAfterClick) {
      await expect(page.getByText(expectTextAfterClick)).toBeVisible();
    } */
  }
}

module.exports = { uiHelpers };

/* import { test } from '@playwright/test';
import { testButtonOnPage } from '../utils/buttonTester';

const testCases = [
  {
    name: 'Đăng nhập',
    url: '/login',
    buttonLabel: 'Đăng nhập',
    shouldBeVisible: true,
    shouldBeEnabled: false,
  },
  {
    name: 'Mua ngay',
    url: '/product/123',
    buttonLabel: 'Mua ngay',
    shouldBeVisible: true,
    shouldBeEnabled: true,
    click: true,
    expectTextAfterClick: 'Đã thêm vào giỏ hàng',
  },
  {
    name: 'Xác nhận đơn hàng',
    url: '/checkout',
    buttonLabel: 'Xác nhận',
    shouldBeVisible: true,
    shouldBeEnabled: true,
    click: true,
    expectUrlAfterClick: '/order/success',
  },
];

for (const testCase of testCases) {
  test(`Test button "${testCase.buttonLabel}" on ${testCase.url}`, async ({ page }) => {
    await testButtonOnPage({ page, ...testCase });
  });
} */
