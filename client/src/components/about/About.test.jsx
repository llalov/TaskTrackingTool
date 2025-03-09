import {expect, it} from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

import About from "./About";

it('Should be equal', () => {
    //Arrange
    render(<About/>);

    //Act
    const paragraph = screen.getByText('Task Tracking Tool helps teams streamline their workflow, collaborate efficiently, and manage tasks with ease.');

    //Assert
    expect(paragraph).toBeVisible();
})