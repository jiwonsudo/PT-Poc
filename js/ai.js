export default function getRecommendation(row) {
    const [height, weight, gender, age, exerciseIntensity, exerciseGoal, lactoseIntolerance, milkAllergy, soyAllergy, eggAllergy, kidneyProblem, caffeineToxic, dehydrationOrConstipation, vegan] = row;

    // 가능한 단백질 리스트
    let possibleProteins = [];

    // 운동 목표에 따른 기본 추천
    if (exerciseGoal === "체중 감량") {
        if (vegan) {
            possibleProteins.push("식물성 프로틴");
        } else {
            possibleProteins.push("WPC", "WPI", "WPH", "혼합 단백질");
        }
    } else if (exerciseGoal === "근육 증가") {
        if (vegan) {
            possibleProteins.push("식물성 프로틴");
        } else {
            possibleProteins.push("WPC", "WPH", "혼합 단백질");
        }
    } else if (exerciseGoal === "지구력 향상") {
        possibleProteins.push("카제인 프로틴");
    } else if (exerciseGoal === "유연성 향상") {
        if (!eggAllergy) {
            possibleProteins.push("계란 프로틴");
        } else {
            possibleProteins.push("식물성 프로틴");
        }
    } else if (exerciseGoal === "균형과 코어 강도 증가") {
        possibleProteins.push("소화효소포함 프로틴");
    } else if (exerciseGoal === "심폐 기능 향상") {
        possibleProteins.push("WPC");
    } else if (exerciseGoal === "스트레스 해소 및 정신 건강") {
        possibleProteins.push("혼합 단백질");
    } else if (exerciseGoal === "부상 예방 및 회복") {
        possibleProteins.push("식물성 프로틴");
    }

    // 신체 특성에 따른 필터링
    if (lactoseIntolerance) {
        possibleProteins = possibleProteins.filter(p => !["WPC", "카제인 프로틴"].includes(p));
    }
    if (milkAllergy) {
        possibleProteins = possibleProteins.filter(p => p !== "WPC");
    }
    if (soyAllergy) {
        possibleProteins = possibleProteins.filter(p => p !== "식물성 프로틴");
    }
    if (eggAllergy) {
        possibleProteins = possibleProteins.filter(p => p !== "계란 프로틴");
    }

    // 운동 강도에 따른 추천 조정
    if (exerciseIntensity >= 4) { // 고강도 운동
        if (possibleProteins.includes("WPH")) {
            return "WPH";
        } else if (possibleProteins.includes("WPI")) {
            return "WPI";
        } else if (possibleProteins.includes("WPC")) {
            return "WPC";
        }
    } else if (exerciseIntensity === 3) { // 중간 강도 운동
        if (possibleProteins.includes("혼합 단백질")) {
            return "혼합 단백질";
        } else if (possibleProteins.includes("WPC")) {
            return "WPC";
        }
    } else if (exerciseIntensity <= 2) { // 저강도 운동
        if (possibleProteins.includes("식물성 프로틴")) {
            return "식물성 프로틴";
        } else if (possibleProteins.includes("WPC")) {
            return "WPC";
        }
    }

    // 최종 추천
    if (possibleProteins.length > 0) {
        return possibleProteins[0]; // 가능한 첫 번째 단백질을 추천
    }

    return "혼합 단백질"; // 기본적으로 혼합 단백질을 추천
}