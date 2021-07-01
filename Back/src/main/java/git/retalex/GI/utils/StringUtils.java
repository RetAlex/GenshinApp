package git.retalex.GI.utils;

public class StringUtils {
    public static String getOrDefault(String originalValue, String defaultValue){
        return originalValue!=null?originalValue:defaultValue;
    }
}
