/**
 * Get company initial for logo placeholder
 * @param {String} name - Company name
 * @returns {String} - First letter of company name or fallback
 */
export const getCompanyInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '?';
  };
  
  /**
   * Get CSS class for industry badge
   * @param {String} industry - Industry name
   * @returns {String} - CSS class for badge
   */
  export const getBadgeClass = (industry) => {
    if (!industry) return 'badge';
    
    const industryLower = industry.toLowerCase();
    if (industryLower.includes('tech') || industryLower.includes('software')) {
      return 'badge badge-tech';
    } else if (industryLower.includes('health') || industryLower.includes('medical')) {
      return 'badge badge-healthcare';
    } else if (industryLower.includes('finance') || industryLower.includes('banking')) {
      return 'badge badge-finance';
    }
    
    return 'badge';
  };