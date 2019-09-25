
/**
 * Criteria type.
 * Can be formed of a 2 or 3 token touple, where:
 * - 1st is always the property to compare
 * - 2nd can be a comparator or a value
 * - 3rd can be a value
 * 
 * If 3rd value is not mentioned, the comparator can be treated as 'equals' or 
 * 'matches' and the 2nd value becomes the 'compared to' value.
 * 
 * i.e.
 * 
 * ['id', 10]
 * 
 * ['id', '>', 10]
 * 
 * ['name', 'like', 'test']
 * 
 * Comparators and their verbs should be defined within the developed API and
 * should match the capabilities of the storing tool used by the API.
 */
export type ICriteria = [string, any, any?]