import React from "react";

import { render, fireEvent, waitForElement } from "@testing-library/react";

import LiveSearch from "components/LiveSearch";

import axios from "axios";

jest.mock("axios");

const result = {
  resultCount: 1,
  results: [
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 1419227,
      collectionId: 201274359,
      artistName: "Beyoncé",
      collectionName: "Dangerously in Love",
      collectionCensoredName: "Dangerously in Love",
      artistViewUrl:
        "https://music.apple.com/ca/artist/beyonc%C3%A9/1419227?uo=4",
      collectionViewUrl:
        "https://music.apple.com/ca/album/dangerously-in-love/201274359?uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
      collectionPrice: 10.99,
      collectionExplicitness: "notExplicit",
      trackCount: 15,
      copyright: "℗ 2003 J Records, 2003 Sony Music Entertainment Inc.",
      country: "CAN",
      currency: "CAD",
      releaseDate: "2003-06-24T07:00:00Z",
      primaryGenreName: "Pop"
    }
  ]
};

describe("LiveSearch", () => {
  it("loads data for artist and renders", () => {
    axios.get.mockResolvedValue({ data: result });
    const { getByText, getByPlaceholderText } = render(<LiveSearch />);

    fireEvent.change(getByPlaceholderText(/search artists/i), {
      target: { value: "Beyonce" }
    });

    return waitForElement(() => getByText("Dangerously in Love"));
  });
});
