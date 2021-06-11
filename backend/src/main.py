import datetime
from urllib.parse import quote

import chromedriver_binary
from selenium import webdriver


def getDriver():
    chromeOptions = webdriver.ChromeOptions()
    chromeOptions.add_argument('--headless')
    chromeOptions.add_argument('--disable-gpu')
    chromeOptions.add_argument('--no-sandbox')
    driver = webdriver.Chrome(options=chromeOptions)
    driver.implicitly_wait(10)
    return driver


def crawl(driver, css, results):
    title_tags = driver.find_elements_by_css_selector("h3")[:-1]
    a_tags = driver.find_elements_by_xpath("//a[h3]")

    links = []
    titles = []
    for a_tag, title_tag in zip(a_tags, title_tags):
        links.append(a_tag.get_attribute("href"))
        titles.append(title_tag.text)

    for link, title in zip(links, titles):
        result = [title, link]
        try:
            driver.get(link)
            for cs in css:
                try:
                    result.append(driver.find_element_by_css_selector(cs).text)
                except:
                    result.append(None)
        except:
            pass

        print(result)
        results.append(result)
    return results


def getTarget(kw, pages, css):
    driver = getDriver()
    results = []
    for page in range(pages):
        start = "&start=" + str(page * 10)
        url = 'https://www.google.com/search?q=' + quote(kw) + start
        driver.get(url)
        results = crawl(driver, css, results)

    driver.quit()
    return results


if __name__ == '__main__':
    datas = getTarget('松 SEO', 2, ['h1'])
    print(datas)
