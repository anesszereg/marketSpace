import React from "react";
import { Container } from "react-bootstrap";
import BadgeswithHeading from "./BadgeswithHeading";
import ButtonPositionBadges from "./ButtonPositionBadges";
import DefaultBadges from "./DefaultBadges&Soft";
import GradientBadges from "./GradientBadges";
import OutlineBadges from "./OutlineBadges&RoundedPill";
import OutlinePillBadges from "./OutlinePillBadges&Label";
import RoundedPillsofteffect from "./RoundedPillsofteffect&Border";

const Badge = () => {
    return (
        <div className="page-content">
            <Container fluid>
                <DefaultBadges />
                <OutlineBadges />
                <RoundedPillsofteffect />
                <OutlinePillBadges />
                <GradientBadges />
                <ButtonPositionBadges/>
                <BadgeswithHeading />
            </Container>
        </div>
    )
}

export default Badge;