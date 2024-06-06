<p align="center">
    <h1 align="center">Primary for <a href="https://obsidian.md">Obsidian</a></h1>
    Stars | Issues | Contributors
</p>

<p align="center" style="font-style: italic;">
    Winner of <a href="http://obsidian.md/october2021">Obsidian October 2021</a>'s Best Theme ✨
    <blockquote>
    Primary is soft, chewy, comforting — like a chocolate chip cookie, or a warm brownie. Primary instantly puts you in a relaxed state that opens the door to creativity and exploration. Wonderfully executed down to the smallest details, Primary ran away with first place.
    </blockquote>
</p>

<p align="right">
    <strong>Obsidian October 2021 Judges</strong>
</p>

## 🖼️ Previews

Overall Demo

Desktop Main View Light Mode

Desktop Main View Dark Mode

Tablet and Phone Main View Light Mode 

Tablet and Phone Main View Dark Mode

## 📖 How to Get Primary for Obsidian

### Install via the Obsidian Theme Store

This option will give you access to public releases.

1. Open up Obsidian and go to Settings.
2. Inside Settings, head over to the Appearance tab.
3. Under Themes, you should find a button called, `Manage`. Click on it. This will open up the Community Themes page.
4. On the search bar, type `Primary`, and click the one that says, `By Cecilia May`. It should open up the theme.
5. Click `Install and Use` to install the theme! Enjoy.

### Install Beta Version

This option is exclusive to monthly subscribers of Primary.

1. Head on over to [Primary's Ko-fi](https://dub.sh/primary/ko-fi) page.Under Buy a Coffee, choose Membership and subscribe to get access to member exclusive posts.
2. After subscribing, head over to the `Posts` tab. This is under the header, just below my name and ko-fi link.
3. Once in the Posts tab, you should be able to find posts usually titled along the lines of `Primary x.x.x-beta (Monthly Subscriber Exclusive)`. Click on the latest post.
4. The post includes the full Release Notes so you're fully informed what new features or fixes you get for that release! To get the a copy of that beta, scroll down a bit until you find the `Click here to download the CSS file.` link. This should take you to a GitHub gist page.
5. On the GitHub gist page at the top right side, click **Download Zip**. This will give you a `.zip` file with 1 file inside, the `primary-x.x.x-beta.css` file (where x.x.x is the version number).
6. Unzip the file and copy the CSS file.
7. Paste it under your vault's `.obsidian/themes` folder. You can open this folder through Obsidian. To do so, open up *Settings*, and go to the *Appearance* tab. Under `Themes`, there's an icon beside the theme dropdown. Click it to open the themes folder. It should open up the folder `Vault Name/.obsidian/themes`. Paste the CSS file there.
8. Go back to Obsidian and open up your Command Palette. Type `Reload app without saving` and press enter so that your Obsidian gets reloaded and ensures it identifies the CSS file.
9. Once your Obsidian has reloaded, open up Settings -> Appearance tab. Under the `Themes` dropdown, select the `primary-x.x.x-beta` you downloaded. This should load the theme.
10. Reload the app again for best results.

## 🧭 Navigation
- How to Get Primary for Obsidian
- Features
- Customization
- Supported Plugins
- Disclaimer
- Contributing
    - Non-developers
    - Developers
    - License
- Creating Primary
- Credits

## 🔌 Supported Plugins

### Core Plugins

Primary currently supports all plugins provided by Obsidian with the exception of Publish.

Publish will be supported soon.

### Community Plugins

Primary should generally support Community Plugins out of the box, since Primary has properly styled all Obsidian components. Some Community Plugins are given extra support though, to better fit the theme. 

Here's a list of plugins tried and tested to fit with Primary:

- [Advanced Canvas](obsidian://show-plugin?id=advanced-canvas)
- [Calendar](obsidian://show-plugin?id=calendar)
- [Hider](obsidian://show-plugin?id=obsidian-hider)
- [Iconize](obsidian://show-plugin?id=obsidian-icon-folder)
- [Kanban](obsidian://show-plugin?id=obsidian-kanban)
- [Style Settings](obsidian://show-plugin?id=obsidian-style-settings)

## 🚧 Disclaimer

The theme, as stated in the license, is provided as is. The theme is originally designed to be of personal use with macOS, Windows, and mobile. It isn't thoroughly tested in all operating systems, or in all use cases (considering Obsidian's flexibility).

The theme is a heavily modified version of Obsidian so it may break with future updates. It may also clash with other CSS snippets you have (or plugins' CSS styling).

Consider contributing to this open project if you'd like to support a necessary feature or plugin, or share your CSS snippets in the discussion page!

## 🌺 Contributing

### Non-developers

If you are not a developer, a great way to contribute to the theme is by reporting issues and feature requests! You can do so through the [Issues Page]().

Don't have a GitHub account? Consider sending a message through [Twitter]() or send me a report directly via [Email](mailto:contact.ceciliamay@gmail.com).

Another great way to contribute is by sharing screenshots of how you use Primary! You can share them on Twitter and tagging @primarytheme or me @ceciliamay_ . You can also send them through the Discussions Page.

### Developers

#### Build Instructions

Let's start by installing the essentials.

Primary is written with a mix of CSS and [Sass](https://sass-lang.com/guide/). If you haven't, do install Sass. 

```
sudo gem install sass
```

After that, we need to install [GruntJS](https://gruntjs.com/configuring-tasks). Grunt allows developers to run various tasks that would otherwise be tedious. In our case, we want our repo to follow Obisidan's repository guidelines while making it easy for us to debug.

Prerequisites would be installing any [NodeJS](https://nodejs.org/en/download/package-manager/current) version.

```
npm install -g grunt-cli
```

#### Setting up your Theme Dev Environment

Within the repo's path, run `npm install` to build all the necessary modules.

Then, go to the `.env.example` and **define your local Obsidian vault path**.

Update the `OBSIDIAN_PATH` to the local path of your Obsidian theme folder.

Once done, rename the file from `.env.example` to `.env`.

#### Code, Build and Test

Run the command below when you start writing code and testing.

```
npx grunt
```

> [!NOTE] What does the command do?
> The command activates the grunt file so that when you save a file in the repo, the Grunt file watches for your save, compiles the CSS and Sass files, minifies it, and copies it in to two locations — one into this repository, and one into the defined path in the `.env` file. This ensures we have an identical copy for testing live within your vault, and one ready for publishing!

### License



## 🧠 Creating Primary

I had 3 problems I wanted to solve.

1. I needed a theme that would give me instant visual context. Much like how Cybertron is, but less cyber-y.
2. I needed a theme that would remind me that my PKM is fun and welcoming.
3. I needed a theme that would remind me that my PKM is not perfect.

I decided to make a theme for my own use. (Coincidentally, I found out about Obsidian October at last minute. I literally didn't start until 10 days ago. HAHAHA. This event really pushed me to start making it!)

BUT, going back to the theme, I wanted to solve these three problems.

Coming from my experience in watercoloring back in high school (and expressing that color science nerd-side of mine), I figured I wanted to go back to the basics. I thought, why not primary colors? In paint mixing for most works, a defined set of "primary colors" (or a limited palette) are all you need! Each text emphasis would correspond to a primary color. To me, italics felt blue, bold felt red, and links felt yellow. And so Problem #1 was solved.

Now, what else has primary colors? Well, I remembered Bauhaus and Ikea. My favorite Ikea items were the wooden toys. They also came in primary colors. Despite the primary colors as a basis of the design, I still wanted it to be warm (as in, feeling cozy) and not so "in your face" or "poppy". While working on the theme, I stumbled upon one of my indie favorites, *I'm Fine by Hazel English*. The music video actually is just pages of retro magazines. What I noticed was how colorful but calming these pages were. I've gone through old magazines myself. The aspect I was most fascinated with was how the aging and yellowing affected the colors... The luxurious green was now minty. The blues were subdued. The reds were cozy. I decided to combine all of their visual language and concluded a summary explained in these following words: Warm. Wood is Warm. Primary Colors. Warm Primary Colors. Warm and Primary SCHOOLS. Primary is children? Children love to play. Children love games. Ikea wooden toys with primary colors that children love to play with? Anyway, Problem #2 is now solved.

All of these design choices and coincidences tied perfectly to this feeling of imperfectness. Like, a kid growing up. Karla—the ever so slightly weird looking font I've chosen for Primary—looks like a better version of your handwriting in 5th grade. The cherry on top was when I figured out how to create that specific button and box shadows style. It felt like the interface of a game I used to play!

Thus, 3 personal problems solved through this theme. I really enjoyed making this. I hope it'll give you joy too.

I'm planning to update it as best as I can and create more themes hopefully with a different design.

If you've read all the way down here, well, what the heck. Thank you for listening to my TED talk. Please go back to writing your notes or whatever was more important than my rambles. Hahaha!

> written 2021-11-01

## 🩵 Credits

I owe a lot to jdanielmourao ([Sanctum](https://github.com/jdanielmourao/obsidian-sanctum)), kepano ([Minimal](https://github.com/kepano/obsidian-minimal)), chetachiezikeuzor ([Yin and Yang](https://github.com/chetachiezikeuzor/Yin-and-Yang-Theme)), and sainhe ([Gruvbox Material](https://github.com/sainnhe/gruvbox-material) and [Everforest](https://github.com/sainnhe/everforest))! Their work inspired me design-wise and their themes helped me a lot in creating mine.

I would also like to thank the Community for continuously giving me inspiration! It's been that way since I joined the Obsidian Discord. I would never forget the welcoming and incredible response I received when I first posted Primary to the group. I'm forever grateful.

Lastly, I would like to say that I am very blessed to have such active, loving, and supportive users. Despite being inactive for a couple of years, many have stood by the theme, continued to support and encourage me. I cannot fathom this support, but I deeply appreciate it.

Thank you guys for everything.