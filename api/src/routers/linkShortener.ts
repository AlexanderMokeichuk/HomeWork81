import express from "express";
import {NEW_URL} from "../constants";
import {LinkApi} from "../type";
import Link from "../../models/Link";

const linkShortenerRouter = express.Router();

linkShortenerRouter.post("/", async (req, res) => {
  if (!req.body.url) {
    return res.status(400).json({error: "Incorrect data"});
  }
  if (req.body.url.trim() === "") {
    return res.status(404).json({error: "You have sent an empty url"});
  }

  const links: LinkApi[] = await Link.find();

  let newUrl = NEW_URL();
  links.forEach((item) => {
    if (item.shortUrl === newUrl) {
      newUrl = NEW_URL();
    }
  });

  const postLink: LinkApi = {
    originalUrl: req.body.url,
    shortUrl: newUrl,
  };

  const link = new Link(postLink);
  await link.save();

  return res.send(postLink);
});

linkShortenerRouter.get("/", async (req, res, next) => {
  try {
    const links = await Link.find();
    return res.send(links);
  } catch (e) {
    next(e);
  }
});

linkShortenerRouter.get("/:shortUrl", async (req, res, next) => {
  const shortUrl = req.params.shortUrl;
  try {
    const link = await Link.find({shortUrl: shortUrl});

    if (!link.length) {
      return res.status(404).json({error: "Not found!!"});
    }
    return res.status(301).redirect(link[0].originalUrl);
  } catch (e) {
    next(e);
  }
});

export default linkShortenerRouter;