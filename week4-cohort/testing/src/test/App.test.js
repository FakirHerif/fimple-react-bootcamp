import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import emojiList from "../emojiList.json";
import App from "../App";

describe("Test", () => {
    beforeEach(() => {
        render(<App />);
    });

    it('should render header with emoji images', () => {
        const header = screen.getByText(/Emoji Search/i);
        expect(header).toBeInTheDocument();

        const images = screen.getAllByRole("img");
        expect(images.length).toBe(27);
    });

    it("should render the initial list of emojis", () => {
        const displayedEmojis = emojiList.slice(0, 25);
        displayedEmojis.forEach(item => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });

    it("should filter the emoji list and re-render based on input", () => {
        const input = screen.getByRole("textbox");
        const filter = "smile cat";
        const filteredList = emojiList.filter(
            it => it.keywords.toLowerCase().includes(filter) || it.title.toLowerCase().includes(filter)
        );
        
        fireEvent.change(input, { target: { value: filter } });
        const filteredEmojis = screen.getAllByText(/cat/i);
        expect(filteredEmojis).toHaveLength(2);
    });

    it("should verify the copied emoji text after clicking", async () => {
        const click = screen.getByText("Blush");
        expect(click.parentElement.getAttribute("data-clipboard-text").length).toBeGreaterThan(0);
        console.log(click.parentElement.getAttribute("data-clipboard-text"));
        expect(click.parentElement.getAttribute("data-clipboard-text")).toMatch("😊");
    });
});
