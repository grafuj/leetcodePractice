"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findDifference(nums1, nums2) {
    let nums1Length = nums1.length;
    let nums2Length = nums2.length;
    let nums1Unique = [];
    let nums2Unique = [];
    let found = false;
    for (let nums1Index = 0; nums1Index < nums1Length; nums1Index++) {
        if (nums2.indexOf(nums1[nums1Index]) === -1) {
            if (nums1Unique.indexOf(nums1[nums1Index]) === -1) {
                nums1Unique.push(nums1[nums1Index]);
            }
        }
    }
    for (let nums2Index = 0; nums2Index < nums2Length; nums2Index++) {
        if (nums1.indexOf(nums2[nums2Index]) === -1) {
            if (nums2Unique.indexOf(nums2[nums2Index]) === -1) {
                nums2Unique.push(nums2[nums2Index]);
            }
        }
    }
    return [nums1Unique, nums2Unique];
}
