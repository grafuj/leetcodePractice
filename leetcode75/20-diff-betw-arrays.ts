function findDifference(nums1: number[], nums2: number[]): number[][] {
  let nums1Length: number = nums1.length;
  let nums2Length: number = nums2.length;
  let nums1Unique: Array<number> = [];
  let nums2Unique: Array<number> = [];

  let found: boolean = false;

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
